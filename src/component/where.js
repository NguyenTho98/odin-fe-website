import React from 'react';

function WhereCenter() {
  return (
    <>
      <div className="container where-wrapper">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-xs-12">
            <div className="item">
              <div className="icon">
                <svg
                  width="58"
                  height="58"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <circle
                    cx="29"
                    cy="29"
                    r="28.5"
                    fill="url(#pattern0)"
                    stroke="#CC0E15"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_14:22"
                        transform="translate(-0.198113) scale(0.0188679)"
                      />
                    </pattern>
                    <image
                      id="image0_14:22"
                      width="74"
                      height="53"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
              <div className="title">
                Số 1 Đông Tác - Kim Liên -Đống Đa - Hà Nội
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12">
          <div className="item">
              <div className="icon">
                <svg
                  width="58"
                  height="58"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <circle
                    cx="29"
                    cy="29"
                    r="28.5"
                    fill="url(#pattern0)"
                    stroke="#CC0E15"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_14:22"
                        transform="translate(-0.198113) scale(0.0188679)"
                      />
                    </pattern>
                    <image
                      id="image0_14:22"
                      width="74"
                      height="53"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
              <div className="title">
              Số 103 Trần Quốc Vượng - Dịch Vọng Hậu - Cầu Giấy - Hà Nội
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12">
          <div className="item">
              <div className="icon">
                <svg
                  width="58"
                  height="58"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <circle
                    cx="29"
                    cy="29"
                    r="28.5"
                    fill="url(#pattern0)"
                    stroke="#CC0E15"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_14:22"
                        transform="translate(-0.198113) scale(0.0188679)"
                      />
                    </pattern>
                    <image
                      id="image0_14:22"
                      width="74"
                      height="53"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
              <div className="title">
              Tầng 03 - 04, Số 70 Trần Đại Nghĩa - Đồng Tâm - Hai Bà Trưng - Hà Nội 
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12">
          <div className="item">
              <div className="icon">
                <svg
                  width="58"
                  height="58"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <circle
                    cx="29"
                    cy="29"
                    r="28.5"
                    fill="url(#pattern0)"
                    stroke="#CC0E15"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_14:22"
                        transform="translate(-0.198113) scale(0.0188679)"
                      />
                    </pattern>
                    <image
                      id="image0_14:22"
                      width="74"
                      height="53"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAA1CAYAAADmpH1lAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAhfSURBVHgB7VprbBxXGT3z2rd37V07juM0DbhOk9hOIQqkqWgoURFQqTykCtSCSghEIZFaKiQEEgikCBUkVAkkEFX5RakoqUBtoVSloYQo4FiAUgJuVSeNm6iSX/Ha67X3PXem595dp677o/und1bVnmi02d17Z2eOv+985353DJ9AG+8IE200hTZRTaJNVJNoE9Uk2kQ1iTZRTaJNVJNoQaL8xtFasBE0PA/u7BzEa1fgvnYZ/uISfOHD6knD2no9zK1b4PT1wjcMGAgORlDO3CdB5bF/o/yb38F48b8wSxUYpsUYrwe5L1x5cRDxGLBnN2KHD8IZ3gHDCIauQIgSuSUs//xXMJ58GqbrwcwwejJdJMmSDKoxvmXDEDWIuSzEwiI8SdC9dyN1/xEYtgPd4aWdKDebxcqhYzAvXoHZ1wMrkYCYX4BfWAFqLlYvxzAYWY4DM5mAmUrCW87DI2nVnTci9fBPYWcyWsnSSpRXLGHhS19DaOIi7L6N8CtVeCTOC4WwEHZw1RMocpzPqIqRhV47hHSxwhBk1HWnYTDgxMwc3I/sQ+dDD8LsiEMXW/qIEgK5b/8AxjPPwdiQhk8CvFIZ0yETk24FeRlRjCCrI8mL8lBjetaqNXTGYripK4N0vgAjQfpCERWV5j2fR+p735KhBx3QRlTh1BmUjj4AOxxmZJgQpSImeI8XVpYQTqfxvi/chcxH9zOl0ohEowitFPDK75/E64+fgOW6GIx3YEupCkOKO1O0xihLPPowohR6HdDjo/i3KDx2QqWQx1+srSxjjtFzubSMxLZB7Hvklxg4fAjdO3cgTtKSPT3o2rEdIw/ch489/ijC/f24tLKCxXAILl9924ZVq6H0hz9CF7QQ5c7Nw/3nmPo1QZ2qsbpdKDLVKOTDDx6H078J2ewiIpEIekhSjBGVz+eRXciiwDGD3/0ODOrRJcF0pSa5pRKE4aP07F9YBArQAS1EFcb+BaNapUwJCEbCgmmo6rbt0FewxBufn59HhikXoqivosrxHr1WlX6quiGDvjs+iQLFP8e5olphcFLgGV35cy9CB7QQVf7fOEueUETx/pAjWeAN1+i6DUZGmiR1d3fTa755OZK8qamp+vwKI2n7djkFi57Lc/jwqFs+U9kdvwAd0LKEEdIC+KKxhDNQla/UqKF9t2CusIwYK5sk0bIsNd6lWM9OTcMlGa8XrqjvY5v7lbeqkmkZaSxDyhh4uSx04F2PKF/+k6kmhZyHXLrwHX/YR7wjgYGBAeRyOYyNnsXS0lL9olgVezb2ItmZUimYX8pTuxhxnGmSZM+vn0tGli4X+K4TJZeyZlcaamEib5I3F+bdOUzFxclJNUaSkWXUjY6OYmZmRqXg0NAQRkZG4DLSNtCcWiTR5nyHZ/I4v37w/OkMdECLRtnDOyEYBW7jiJM8xzeQPfmC+n5wcBBh+qsSvZNwxbV5kiSZXtdtuQ5XT/5V6USc82TqSaJqPFd4ZAd0tGW0EJW+7VaUZbWiTkmtipQrSEUjyD39DAqXLyttSqVS6KKH2sjoWUUsGsPO4SGEuWzJcmyU/ikkq6csDDxqTN04/wg6ljFaiLKoNdEDtyk9UQsBinSkWIZJ7Rk/ej8KExOI0nHvpsteFXQ1j1qVmruKl77xTdgkqMutwndr6hzyiN96i1ry6IAeZ871WPKzn2baiXppZ8rYJCnCNHOmZ3H+noMwn/oT3Mkr8Ggg/UIJi+fOY+L4j/DykfsgpufQaTLxOEemnZB9Kp4jcmC/shlabkHXWs+lGF/41GcgLr56TVIM6Zu6Myg6Nio0k/JjYVuyrMGm+kejIVXpbLp5c2FBLYXkGEXNpj5s/8ffYCc7oAPaeuY2NSh99Ihy1Kq88xB03WJ2FpHZq4wYCx3UrSTdeTISRkckhBA7DPb0DHyaT6VLjXlSxFNfPci0S0AXNPejijj/iTuB8Zfe3tL15XtDGUkon4W6pq0fJlNv82bsOn0SITp6XdC6C2PSYV//w+OqRVKT0SRvuuG0V6PM84R67yotanzXGCfnSGfef/z7cGTrWCP098ypP+fu/BzKp88ohy51ykJ9h2X9PotUJE9NqRcACfPGbbj5P6NS4KATgWwulKdmMPbBD8EuFBubCYZ6XZ+O6tKMBoUk1KOG7Xr2KaT27IFuBLIBGtm0EQM/+TGkB/dZ9oUnyz0rI1/XHquf0VCpVOw99nUkd+vpaK5HcPt6jKBzd92N/HPP121CTdqDVTGXL4YScpNV0KffinzgJux5/s+w43EEgcCIkgpUuDSJs7ffAYceq1oucx9PvGWEwSWLQY/l8gr3njmF1K5hBIUAnz0wEGeLZdcjv0BZdhMSHdzkNBuum+ItSWJLuFLhxsLPHkJyZAhBIvCHNHo+fjt6D30ZxcWcKvmuJIoCbrNXXs4vY/Oxw9h67xcR0E76NQSYem/Cpz6dphEtnB2DwwW0yWiqzmeR2LcXH37it4iwTRw0WoIoiRq7nC/sPwDBZp7shjqD78eBv5+C3dUZ2IMZa9Eyz0c5nZ3Y+9ivYWa64ac6cfMTJ+Cku1qCJImWiaj6VfjI/X8cDo1l/IYbWoYkiQB9lH/tgLfm/6uXIy2VUXfk6tVQHwRGntYn7taSI3VIbobWKmWU2VUossIt008Vl5dVzymRSiKRTCHGflMkFoUTjsKip1J7fw3CdJKmjai3Ba70SrIzwHWKqNZQKZewklvCPPtTsh0sKZA7xyF6qfrWlAdLbbvUWy9G45zGe+1plrVYTTEVWTLtRH2zQG1syvdy6aIWwhatgsl9PustURRE+rWMmEvUCVz3YUOrgkZLEdXKaD+Q3yTaRDWJNlFNok1Uk2gT1STeAHYZPRw+bKx5AAAAAElFTkSuQmCC"
                    />
                  </defs>
                </svg>
              </div>
              <div className="title">
              Số 17 Nguyễn Văn Lộc, Phường Mộ Lao, Quận Hà Đông, Hà Nội
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhereCenter;
