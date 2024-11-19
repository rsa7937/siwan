$(function () {
  gsap.registerPlugin(ScrollTrigger);

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

  gsap.from($('.index'), {
    autoAlpha: 0,
    duration: 0.5,
    y: 30,
    scrollTrigger: {
      trigger: 'section:nth-of-type(2)',
      start: 'top 20%',
      // markers: true,
      id: 'index',
      toggleActions: 'play none reverse reverse',
    },
  });

  const $index = $('.index li');
  const sectionEl = gsap.utils.toArray('section');
  const liEl = gsap.utils.toArray('.index li');

  $index.on('mouseenter', function () {
    $(this).addClass('hover');
  });

  $index.on('mouseleave', function () {
    $(this).removeClass('hover');
  });

  // index의 메뉴 클릭시 스타일 활성화
  console.log(sectionEl);
  sectionEl.forEach((sec, index) => {
    ScrollTrigger.create({
      trigger: sec,
      // markers: true,
      start: 'top 60%',
      end: 'bottom 60%',
      toggleClass: { targets: liEl[index - 1], className: 'on' },
    });
  });

  gsap.from($('.btn-top'), {
    autoAlpha: 0,
    duration: 0.5,
    y: 30,
    scrollTrigger: {
      trigger: 'section:nth-of-type(3)',
      start: 'top 20%',
      markers: true,
      id: 'btn-top',
      toggleActions: 'play none reverse reverse',
    },
  });
});
