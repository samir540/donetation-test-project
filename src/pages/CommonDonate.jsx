import React from "react";
function CommonDonate({ setmodalDonate }) {
  return (
    <div className="common-donate">
      <div className="common-donate-remove">
        <i
          onClick={() => setmodalDonate(false)}
          className="fa-solid fa-xmark"
        ></i>
      </div>
      <div className="common-donate-content">
        <div className="container">
          <div className="common-donate-items">
            <div className="common-donate-about">
              <div className="common-donate-image">
                <img
                  src="https://ucarecdn.com/61879270-f970-423e-8f53-57c0d8ece6bd/-/resize/940x/-/format/auto/"
                  alt=""
                />
              </div>
              <div className="common-donate-text">
                <i className="fa-brands fa-pagelines"></i>
                <span>Həyat Fondu</span>
                <h4>Həyat Fondu yoxsulluğa son qoymaq üçün hər gün çalışır.</h4>
                <p>
                  Amma biz sizsiz edə bilmərik. Siz bizə fəlakət zamanı
                  insanların həyatını xilas etmək, ən ucqar ərazilərə təmiz su
                  gətirmək, uşaqları, xüsusilə qızları məktəbə göndərmək və
                  qadınların hüquqlarını müdafiə etməkdə kömək edə bilərsiniz.
                </p>
              </div>
            </div>
            <div className="common-donate-pay-items">
              <div className="common-donate-pay">
                <h1>İANƏ ET</h1>
                <p>
                  Siz bu İanə Et tətbiqindən istidafə edərək Afrikada <br />{" "}
                  yaşayan insanların ehtiyaclarının da qarşılanması üçün <br />{" "}
                  istifadə edə və ianə-i edə bilərsiniz.
                </p>
                <h5>İANƏ MƏBLƏĞİ *</h5>
                <input type="text" name="" id="" />
                <h5>Ad/Soyad *</h5>
                <input type="text" name="" id="" />
                <h5>E-mail *</h5>
                <input type="text" name="" id="" />
                <h5>Kart Sahibinin Adı *</h5>
                <input
                  className="cardname"
                  type="text"
                  name=""
                  id=""
                />
                <br />
                <h5>Kart Nömrəsi *</h5>
                <input
                  className="cardnumber"
                  type="text"
                  name=""
                  id=""
                  placeholder="0000 0000 0000 0000"
                />
                <br />
                <input
                  className="time"
                  type="text"
                  name=""
                  id=""
                  placeholder="MM/YY"
                />
                <input
                  className="cvv"
                  type="text"
                  name=""
                  id=""
                  placeholder="CVV2"
                />
                <button>ÖDƏ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonDonate;
