import React from 'react';

const BranchWriteModal = (props) => {
    const clearModal = () => {
        props.closeModal()
    }
    const handleSubmit = () => {

    }
    return (
        <div className="modal_wrap">
            <div className="modal_back">
                <div className="modal_box">
                    <div className="modal_title_box">
                        <div className="modal_title">지점 등록</div>
                        <div className="modal_close_btn" onClick={() => clearModal()}>
                            X
                        </div>
                    </div>
                    <div className="table_box">
                        <div className="table_row">
                            <div className="table_section">
                                <div className="table_title">
                                    지점명<p className="title_point">*</p>
                                </div>
                                <div className="table_contents w100">
                                    <input
                                        className="table_input modal"
                                        type="text"
                                        id="title"
                                        placeholder="지점명을 입력해주세요."
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className="table_row">
                            <div className="table_section">
                                <div className="table_title">
                                    종류<p className="title_point">*</p>
                                </div>
                                <div className="table_contents w100">
                                    <select
                                        name="affiliation"
                                        className="table_select"
                                    >
                                        <option value="">종류 선택</option>
                                        <option value="company">Company</option>
                                        <option value="school">School</option>
                                        <option value="organization">Organization</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="table_row">
                            <div className="table_section">
                                <div className="table_title">
                                    지역<p className="title_point">*</p>
                                </div>
                                <div className="table_contents w100">
                                    <select
                                        name="affiliation"
                                        className="table_select"
                                    >
                                        <option value="">지역 선택</option>
                                        <option value="company">Company</option>
                                        <option value="school">School</option>
                                        <option value="organization">Organization</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal_footer_box">
                        <div className="modal_btn" onClick={handleSubmit}>
                            등록
                        </div>
                        <div className="modal_btn close" onClick={clearModal}>
                            닫기
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BranchWriteModal;