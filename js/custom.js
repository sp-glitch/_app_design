
// 알림 답변
$(document).ready(function () {
  $('.alarm-item').on('click', function () {
    const $this = $(this);
    const $answer = $this.next('.alarm-answer');
    const $icon = $this.find('.alarm-icon');

    $('.alarm-answer').not($answer).slideUp();
    $('.alarm-item').not($this).find('.alarm-icon').removeClass('rotated');

    $answer.slideToggle(200, function () {
      $icon.toggleClass('rotated', $answer.is(':visible'));
    });
  });
});

// 탭
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const targetId = this.dataset.tab;

      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      panels.forEach(panel => {
        if (panel.id === targetId) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-tab-button');
  const filterPanels = document.querySelectorAll('.filter-tab-panel');

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      const targetId = this.dataset.target;

      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      filterPanels.forEach(panel => {
        panel.classList.toggle('active', panel.id === targetId);
      });
    });
  });
});

// 프로그레스
document.addEventListener('DOMContentLoaded', function () {
  let currentStep = 0;
  const steps = document.querySelectorAll(".step");
  const contents = document.querySelectorAll(".step-content");
  const nextButton = document.getElementById("nextStep");

  function updateStep() {
    steps.forEach((step, index) => {
      step.style.backgroundColor = index <= currentStep ? "#E86364" : "#F1F2F3";
    });

    contents.forEach((content, index) => {
      content.classList.toggle("active", index === currentStep);
    });

    if (currentStep === steps.length - 1) {
      nextButton.textContent = "간병인 신청하기";
    } else {
      nextButton.textContent = "다음";
    }
  }

  nextButton.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateStep();
    } else {
      location.href = "applyComplete.html";
    }
  });
  updateStep();
});

document.addEventListener('DOMContentLoaded', function () {
  let currentStep = 0;
  const totalSteps = 3;
  const contents = document.querySelectorAll(".reg-content");
  const nextBtn = document.getElementById("regNextBtn");
  const labels = document.querySelectorAll(".reg-label");
  const segments = document.querySelectorAll(".reg-segment");

  function updateUI() {
    contents.forEach((content, index) => {
      content.classList.toggle("active", index === currentStep);
    });

    segments.forEach((segment, index) => {
      if (index <= currentStep) {
        segment.classList.add("active");
      } else {
        segment.classList.remove("active");
      }
    });

    labels.forEach((label, index) => {
      label.classList.toggle("active", index === currentStep);
    });

    // 버튼 텍스트 업데이트
    if (currentStep === totalSteps - 1) {
      nextBtn.textContent = "하나로케어 시작하기";
    } else if (currentStep === 1) {
      nextBtn.textContent = "가입완료";
    } else {
      nextBtn.textContent = "다음";
    }
  }

  nextBtn.addEventListener("click", () => {
    if (currentStep < totalSteps - 1) {
      currentStep++;
      updateUI();
    } else {
      location.href = "../home/home.html";
    }
  });

  updateUI();
});

// 모달
function openModal() {
  document.getElementById("addressModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("addressModal").style.display = "none";
}

function openFetchModal() {
  document.getElementById('fetchPatientModal').style.display = 'flex';
}
function closeFetchModal() {
  document.getElementById('fetchPatientModal').style.display = 'none';
}

function openCancelModal() {
  document.getElementById('cancelModal').style.display = 'flex';
}

function closeCancelModal() {
  document.getElementById('cancelModal').style.display = 'none';
}

function confirmCancel() {
  closeCancelModal();
  window.location.href = "../home/home.html";
}

function openCostInfoModal() {
  document.getElementById("costInfoModal").style.display = "flex";
}

function closeCostInfoModal() {
  document.getElementById("costInfoModal").style.display = "none";
}

function openChangeCaregiverWarningModal() {
  document.getElementById("changeCaregiverWarningModal").style.display = "flex";
}

function closeChangeCaregiverWarningModal() {
  document.getElementById("changeCaregiverWarningModal").style.display = "none";
}

function openChangeCaregiverModal() {
  document.getElementById("changeCaregiverModal").style.display = "flex";
  closeChangeCaregiverWarningModal();
}

function closeChangeCaregiverModal() {
  document.getElementById("changeCaregiverModal").style.display = "none";
}

function handleChangeCaregiver() {
  closeChangeCaregiverModal();
  window.location.href = '../status/statusDone.html';
}

function openCancelRequestModal() {
  document.getElementById('cancelRequestModal').style.display = 'flex';
}

function closeCancelRequestModal() {
  document.getElementById('cancelRequestModal').style.display = 'none';
}

function confirmCancelRequest() {
  window.location.href = '../home/home.html';
}

function openCancelPaymentModal() {
  document.getElementById("cancelPaymentModal").style.display = "flex";
}

function closeCancelPaymentModal() {
  document.getElementById("cancelPaymentModal").style.display = "none";
}

function handleCancelPayment() {
  window.location.href = "../status/statusCancel.html";
}

function openLoginFailModal() {
  document.getElementById("loginFailModal").style.display = "flex";
}

function closeLoginFailModal() {
  document.getElementById("loginFailModal").style.display = "none";
}

function openPasswordMismatchModal() {
  document.getElementById('passwordMismatchModal').style.display = 'flex';
}

function closePasswordMismatchModal() {
  document.getElementById('passwordMismatchModal').style.display = 'none';
}

function openPasswordInvalidModal() {
  document.getElementById('passwordInvalidModal').style.display = 'flex';
}

function closePasswordInvalidModal() {
  document.getElementById('passwordInvalidModal').style.display = 'none';
}

function openUserInfoErrorModal() {
  document.getElementById('userInfoErrorModal').style.display = 'flex';
}

function closeUserInfoErrorModal() {
  document.getElementById('userInfoErrorModal').style.display = 'none';
}

function openAuthFailModal() {
  document.getElementById('authFailModal').style.display = 'flex';
}

function closeAuthFailModal() {
  document.getElementById('authFailModal').style.display = 'none';
}

function openApplyModal() {
  document.getElementById('applyModal').style.display = 'flex';
}

function closeApplyModal() {
  document.getElementById('applyModal').style.display = 'none';
}

function closeApplyModal() {
  document.getElementById("applyModal").style.display = "none";
  window.location.href = 'certificate.html';
}

function openLogoutModal() {
  document.getElementById('logoutModal').style.display = 'flex';
}

function closeLogoutModal() {
  document.getElementById('logoutModal').style.display = 'none';
}

function openInquiryModal() {
  document.getElementById("inquiryModal").style.display = "flex";
}

function closeInquiryModal() {
  document.getElementById("inquiryModal").style.display = "none";
}

function openWithdrawFailModal() {
  document.getElementById("withdrawFailModal").style.display = "flex";
}

function closeWithdrawFailModal() {
  document.getElementById("withdrawFailModal").style.display = "none";
}

function openPasswordFailModal() {
  document.getElementById("passwordFailModal").style.display = "flex";
}

function closePasswordFailModal() {
  document.getElementById("passwordFailModal").style.display = "none";
}

function openPasswordMismatchModal() {
  document.getElementById("passwordMismatchModal").style.display = "flex";
}

function closePasswordMismatchModal() {
  document.getElementById("passwordMismatchModal").style.display = "none";
}

function openCancelNotAllowedModal() {
  document.getElementById("cancelNotAllowedModal").style.display = "flex";
}

function closeCancelNotAllowedModal() {
  document.getElementById("cancelNotAllowedModal").style.display = "none";
}

//글자 수 카운트 
function updateFormCount() {
  // 입원사유
  const admissionReason = document.getElementById("admission-reason");
  if (admissionReason) {
    const admissionCount = admissionReason.value.length;
    const admissionDisplay = document.getElementById("formCountAdmissionReason");
    if (admissionDisplay) admissionDisplay.textContent = `${admissionCount}/50`;
  }

  // 요청사항
  const note = document.getElementById("note");
  if (note) {
    const noteCount = note.value.length;
    const noteDisplay = document.getElementById("formCountNote");
    if (noteDisplay) noteDisplay.textContent = `${noteCount}/50`;
  }

  // 메모
  const patientMemo = document.getElementById("patient-memo");
  if (patientMemo) {
    const memoCount = patientMemo.value.length;
    const memoDisplay = document.getElementById("formCountPatientMemo");
    if (memoDisplay) memoDisplay.textContent = `${memoCount}/50`;
  }

  // 문의제목
  const inquiryTitle = document.getElementById("inquiry-title");
  if (inquiryTitle) {
    const inquiryCount = inquiryTitle.value.length;
    const inquiryDisplay = document.getElementById("formCountInquiryTitle");
    if (inquiryDisplay) inquiryDisplay.textContent = `${inquiryCount}/50`;
  }

  // 문의내용
  const inquiryContent = document.getElementById("inquiry-content");
  if (inquiryContent) {
    const contentCount = inquiryContent.value.length;
    const contentDisplay = document.getElementById("formCountInquiryContent");
    if (contentDisplay) contentDisplay.textContent = `${contentCount}/1,000`;
  }
};

// 선택박스
document.addEventListener("DOMContentLoaded", function () {
  const allGrids = document.querySelectorAll(".state-grid");

  allGrids.forEach(grid => {
    const buttons = grid.querySelectorAll(".state-option");

    const customInput = grid.parentElement.querySelector("#customInsInput");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (grid.classList.contains("disabled")) return;

        if (grid.classList.contains("single-select")) {
          buttons.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");

          if (btn.textContent.trim() === "기타") {
            if (customInput) customInput.style.display = "block";
          } else {
            if (customInput) {
              customInput.style.display = "none";
              customInput.value = "";
            }
          }
        } else {
          btn.classList.toggle("active");
        }
      });
    });
  });

  const cards = document.querySelectorAll('.card-group');
  cards.forEach(card => {
    card.addEventListener('click', function () {
      cards.forEach(group => group.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const statusItems = document.querySelectorAll('.status-item');

  statusItems.forEach(item => {
    item.addEventListener('click', function (e) {
      if (item.classList.contains('disabled')) return;

      e.preventDefault();
      if (item.classList.contains('multi-select')) {
        item.classList.toggle('active');
      } else {
        statusItems.forEach(el => {
          if (!el.classList.contains('multi-select')) {
            el.classList.remove('active');
          }
        });
        item.classList.add('active');
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const withdrawBoxes = document.querySelectorAll('.withdraw-box');
  const directInputBox = Array.from(withdrawBoxes).find(box =>
    box.textContent.includes("직접입력")
  );
  const withdrawForm = document.querySelector('.withdraw-form');

  withdrawBoxes.forEach(box => {
    box.addEventListener('click', () => {
      box.classList.toggle('selected');

      // "직접입력" 항목 선택/해제 시 폼 보이기
      if (box === directInputBox) {
        if (box.classList.contains('selected')) {
          withdrawForm.style.display = 'block';
        } else {
          withdrawForm.style.display = 'none';
          document.getElementById('customWithdrawReason').value = '';
          document.getElementById('formCountCustomWithdrawReason').textContent = '0/50';
        }
      }
    });
  });

  const customReason = document.getElementById("customWithdrawReason");
  if (customReason) {
    const reasonCount = customReason.value.length;
    const reasonDisplay = document.getElementById("formCountCustomWithdrawReason");
    if (reasonDisplay) reasonDisplay.textContent = `${reasonCount}/50`;

    customReason.addEventListener("input", function () {
      const count = customReason.value.length;
      reasonDisplay.textContent = `${count}/50`;
    });
  }
});


// 전체체크
document.addEventListener('DOMContentLoaded', function () {
  const allCheck = document.querySelector('input[type="checkbox"]:first-of-type');
  const checkboxes = document.querySelectorAll('.status-form-body input[type="checkbox"]');

  allCheck.addEventListener('change', function () {
    checkboxes.forEach(cb => {
      cb.checked = this.checked;
    });
  });

  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      if (!cb.checked) {
        allCheck.checked = false;
      } else {
        const allChecked = Array.from(checkboxes).every(box => box.checked);
        allCheck.checked = allChecked;
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const marketingMainCheckbox = document.getElementById('marketing-main');
  const kakaoCheckbox = document.getElementById('marketing-kakao');
  const smsCheckbox = document.getElementById('marketing-sms');

  marketingMainCheckbox.addEventListener('change', function () {
    kakaoCheckbox.checked = this.checked;
    smsCheckbox.checked = this.checked;
  });

  [kakaoCheckbox, smsCheckbox].forEach(cb => {
    cb.addEventListener('change', function () {
      if (!kakaoCheckbox.checked || !smsCheckbox.checked) {
        marketingMainCheckbox.checked = false;
      } else {
        marketingMainCheckbox.checked = true;
      }
    });
  });
});

// 결제버튼
let paymentSelected = false;

function selectPayment(button) {
  document.querySelectorAll('.btn-payment').forEach(btn => {
    btn.classList.remove('active', 'selected');
  });

  button.classList.add('active', 'selected');
  paymentSelected = true;

  updatePayButtonState();
}

function updatePayButtonState() {
  const checkbox = document.getElementById("termsAgree");
  const payButton = document.getElementById("payButton");

  if (paymentSelected && checkbox.checked) {
    payButton.classList.remove("btn-gray");
    payButton.classList.add("btn-pink");
    payButton.disabled = false;
    payButton.onclick = function () {
      location.href = 'statusPG.html';
    };
  } else {
    payButton.classList.remove("btn-pink");
    payButton.classList.add("btn-gray");
    payButton.disabled = true;
    payButton.onclick = null;
  };
};

// 탈퇴 버튼
function toggleWithdrawButton() {
  const checkbox = document.getElementById("agreeWithdraw");
  const button = document.getElementById("withdrawBtn");

  if (checkbox.checked) {
    button.classList.remove("btn-gray");
    button.classList.add("btn-pink");
  } else {
    button.classList.remove("btn-pink");
    button.classList.add("btn-gray");
  }
};

function handleWithdrawClick() {
  const checkbox = document.getElementById("agreeWithdraw");

  if (checkbox.checked) {
    location.href = '../more/moreComplete.html';
  } else {
    openWithdrawFailModal();
  }
};

// 체크박스
document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("termsAgree");

  if (checkbox) {
    checkbox.addEventListener("change", updatePayButtonState);
  }
});

function showCancellationInfo() {
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;

  if (startDate && endDate) {
    document.getElementById("cancellation-info").style.display = "block";
  } else {
    document.getElementById("cancellation-info").style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const startDateInput = document.getElementById("start-date");
  const endDateInput = document.getElementById("end-date");

  if (startDateInput && endDateInput) {
    startDateInput.addEventListener("change", showCancellationInfo);
    endDateInput.addEventListener("change", showCancellationInfo);
  }
});

// 페이지이동
function goToTerms(url) {
  window.location.href = url;
}

// 아코디언
document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;

      if (body.classList.contains('accordion-form-body')) {
        const isOpen = body.classList.contains('open');

        if (isOpen) {
          body.classList.remove('open');
          header.classList.remove('open');
        } else {
          body.classList.add('open');
          header.classList.add('open');
        }
      }
    });
  });
});

// 셀레트박스 아이콘 클릭
document.addEventListener('DOMContentLoaded', function () {
  const selectElement = document.getElementById('revision-date');
  const iconElement = document.getElementById('dropdown-icon');

  iconElement.addEventListener('click', function () {
    selectElement.focus();
  });
});

// 검색창 표출
document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('.more-input');
  const results = document.querySelector('.search-results');

  input.addEventListener('focus', () => {
    results.style.display = 'block';
  });

  input.addEventListener('blur', () => {
    setTimeout(() => {
      results.style.display = 'none';
    }, 200);
  });
});

// 토글 스위치
function toggleSwitch(el) {
  el.classList.toggle('on');
};

