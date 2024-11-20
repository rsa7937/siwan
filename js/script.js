$(function () {
  gsap.registerPlugin(ScrollTrigger);
  dayjs().format();

  $('.btn-top').on('click', () => {
    $('html')
      .stop()
      .animate({ scrollTop: 0 }, function () {
        gsap.to('btn-top', {
          autoAlpha: 0,
          duration: 0.5,
        });
      });
  });

  // Footer 시간 표시
  // Day.js 플러그인 초기화
  dayjs.extend(dayjs_plugin_utc);
  dayjs.extend(dayjs_plugin_timezone);

  function updateTimes() {
    const localTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    // 한국 표준시(KST)
    const kstTime = dayjs().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');

    // jQuery로 HTML에 삽입
    // $('#local-time').text(`로컬 시간: ${localTime}`);
    $('#kst-time').text(` ${kstTime} (KST)`);
  }
  setInterval(updateTimes, 1000);

  // Btn-top
  gsap.from($('.btn-top'), {
    autoAlpha: 0,
    duration: 0.5,
    y: 30,
    scrollTrigger: {
      trigger: 'section:nth-of-type(3)',
      start: 'top 20%',
      // markers: true,
      id: 'btn-top',
      toggleActions: 'play none reverse reverse',
    },
  });
});
