import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import videoSrc from '../assets/videoMain.webm';

function VideoSection() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, []);
  
  const handleNavigate = () => {
    navigate('/works#works-hero');
    // Небольшая задержка, чтобы прокрутка сработала после рендера
    setTimeout(() => {
      const element = document.getElementById('works-hero');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="py-16 bg-[#161616]">
      <div className="mx-auto px-[5%] md:px-[25%]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Текстовый блок */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl md:text-4xl font-normal mb-6">
              От ярких неоновых надписей до креативных световых эффектов
            </h2>
            <p className="text-base md:text-lg mb-6 opacity-90">
              Наша команда создает уникальные и впечатляющие решения, которые привлекают внимание и запоминаются надолго.
            </p>
            <p className="text-base md:text-lg mb-8 opacity-90">
              Доверьте нам оформление вашего бизнеса, и вы получите стильный и эффективный инструмент для привлечения клиентов и укрепления имиджа вашей компании.
            </p>
            <button 
              onClick={handleNavigate}
              className="bg-transparent text-white border border-white rounded-full px-8 py-4 font-medium text-lg w-full md:w-auto flex justify-center hover:bg-gradient-to-r from-[#E601C9] to-[#D504D8] hover:border-transparent transition-all"
            >
              Наши работы
            </button>
          </div>
          
          {/* Видео блок */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-xl overflow-hidden aspect-[9/16] max-w-[350px] mx-auto">
              <video 
                ref={videoRef}
                src={videoSrc}
                className="w-full h-full object-cover"
                loop
                muted 
                playsInline 
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection; 