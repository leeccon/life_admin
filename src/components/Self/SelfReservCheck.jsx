import React, { useState } from "react";
import { useReservContext } from "../Context/ReservContext";
import ReservInfoModal from "../modal/ReservInfoModal";
import { useNavigate } from "react-router-dom";

const SelfReservCheck = () => {
  const { customerData, hospitalName, productName, hopeDate1, hopeDate2, selfUrl } =
    useReservContext();
  const [infoModal, setInfoModal] = useState(false);
  const navigation = useNavigate();

  const openModal = () => {
    setInfoModal(true);
  };
  const closeModal = () => {
    setInfoModal(false);
    navigation(`${selfUrl}`, { state: { status: "keep" } });
  };
  return (
    <div className="reserv_wrap self">
      <div className="reserv_back">
        <div className="reserv_bottom_box">
          <div className="reserv_check_box">
            <div className="check_title_box">
              <div className="check_title">예약완료</div>
              <div className="check_sub">
                고객님의 예약 정보를 확인해주세요.
              </div>
            </div>
            <div className="reserv_text_box">
              <div className="reserv_title">예약자명</div>
              <div className="reserv_text">{customerData.name}</div>
            </div>
            <div className="reserv_text_box">
              <div className="reserv_title">검진대상자명</div>
              <div className="reserv_text">
                {customerData.customerArray.map((data, index) => {
                  return (
                    <span>
                      {data.name}
                      {index !== customerData.customerNumber - 1 && ", "}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="reserv_text_box">
              <div className="reserv_title">인원수</div>
              <div className="reserv_text">{customerData.customerNumber}</div>
            </div>
            <div className="reserv_text_box">
              <div className="reserv_title">예약자 연락처</div>
              <div className="reserv_text">{customerData.phone}</div>
            </div>
            <div className="reserv_text_box">
              <div className="reserv_title">검진자 연락처</div>
              <div className="reserv_text">{customerData.cPhone}</div>
            </div>
            <div className="reserv_text_box">
              <div className="reserv_title">검진자 주소</div>
              <div className="reserv_text">{customerData.cAddr}</div>
            </div>
            <div className="reserv_text_box">
              <div className="reserv_title">선택상품</div>
              <div className="reserv_text">{productName}</div>
            </div>
            <div className="reserv_text_box">
              <div className="reserv_title">선택병원</div>
              <div className="reserv_text">{hospitalName}</div>
            </div>
            <div className="reserv_text_box">
              <div className="reserv_title">희망검진일1</div>
              <div className="reserv_text">{hopeDate1}</div>
            </div>
            <div className="reserv_text_box non_border">
              <div className="reserv_title">희망검진일2</div>
              <div className="reserv_text">{hopeDate2}</div>
            </div>
            <div className="reserv_btn_box last_btn">
              <div className="reserv_btn" onClick={() => openModal()}>
                확인
              </div>

            </div>
          </div>
        </div>
      </div>
      {infoModal && <ReservInfoModal closeModal={closeModal}></ReservInfoModal>}
    </div>
  );
};

export default SelfReservCheck;
