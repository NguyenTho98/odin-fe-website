export const generate_id = () => {
	if (localStorage.getItem("user_id") === null) {
		let id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
		// eslint-disable-next-line
		id = id.replace(/[xy]/g, (c) => {
			let r = Math.floor(Math.random() * 16)
			let v
			if (c === 'x') {
				v = r
			} else {
				v = (r & 0x3) | 0x8
			}
			return v.toString(16)
		})
		localStorage.setItem("user_id", id)
		return id
	} else {
		return localStorage.getItem("user_id")
	}
}

export const get_local_storage = (name_field = "user_id", default_res = null) => {
	try {
		return (isset_filed(name_field)) ? JSON.parse(localStorage.getItem(name_field)) : default_res
	} catch (error) {
		return default_res
	}
}

export const isset_filed = (filed_name) => {
	try {
		const filed_value = localStorage.getItem(filed_name)
		if (
			filed_value !== null
			&& filed_value !== 'null'
			&& filed_value !== undefined
			&& filed_value !== 'undefined'
			&& filed_value !== ''
		) {
			return true
		} else {
			return false
		}
	} catch (error) {
		return false
	}
}

export const is_empty = (value) => {
	return (
		value === undefined ||
		value === null ||
		(typeof value === 'object' && Object.keys(value).length === 0) ||
		(typeof value === 'string' && value.trim().length === 0)
	)
}

export const html_encode_entities = (input) => {
	// eslint-disable-next-line
	const e = input.replace(/[\u00A0-\u9999<>\&]/gim, (i) => {
		return '&#' + i.charCodeAt(0) + ''
	})
	return e
}

export const reander_text_links = (text, campaign_url_builder = "") => {
	const remove_script = html_encode_entities(text)
	// eslint-disable-next-line
	const text_break = remove_script.replace(/(\r\n|\r|\n)+/g, ' </br> ')
	// eslint-disable-next-line
	return (text_break || "").replace(/([^\S]|^)(((http?\:\/\/)|(https?\:\/\/)|(www\.))(\S+))/gi,
		(match, space, url) => {
			let hyperlink = url
			// eslint-disable-next-line
			if (!hyperlink.match('^https?:\/\/')) {
				// eslint-disable-next-line
				hyperlink = '//' + hyperlink
			}
			return space + '<a href="' + hyperlink + campaign_url_builder + '" target="_blank" rel="noopener noreferrer">' + url + '</a>'
		}
	)
}

export const mask_info = (text) => {
	var reMobile = /(09|03|02|04|05|06|07|08|01)+([0-9]{7,13})$/g;
	var reIdNumber = /([0-9]{9,11})$/g;
	var reOTP = /([0-9]{4,6})$/g;
	if (reMobile.test(text) || reIdNumber.test(text) || reOTP.test(text)) {
		let mask_text = "***" + text.substring(text.length - 3, text.length)
		return mask_text
	} else {
		return text
	}
}

export const extract_name = (text) => {
	if (text != null) {
		let name = ""
		let name_array = text.split(" ")

		if (name_array[name_array.length - 1] === "anh" && name_array.length >= 2) {
			let sub_name = name_array[name_array.length - 2]
			sub_name = sub_name.charAt(0).toUpperCase() + sub_name.slice(1);
			let final_name = name_array[name_array.length - 1]
			final_name = final_name.charAt(0).toUpperCase() + final_name.slice(1);
			name = sub_name + " " + final_name
		} else {
			name = name_array[name_array.length - 1]
			name = name.charAt(0).toUpperCase() + name.slice(1);
		}

		return name
	}

	return ""
}

export const generate_key = (text) => {
	let d = new Date();
	let key = text + d.getTime() + Math.random();
	return key

}

export const get_current_time = () => {
	let currentdate = new Date();
    let month = currentdate.getMonth() + 1
	let time_string = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds() + " " + currentdate.getDate() + "/" + month + "/" + currentdate.getFullYear()
	return time_string
}
