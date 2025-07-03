import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";
import { Box, Typography } from '@mui/material';



const testimonials = [
  {
    name: "Amit Sharma",
    feedback: "Overall, I had a wonderful stay.I felt very comfortable throughout my visit. Would definitely return!",
    image:"https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg?semt=ais_hybrid&w=740",
  },
  {
    name: "Neha Reddy",
    feedback: "The service was exceptional, and the staff went above and beyond to ensure my comfort. Highly recommend!",
    image: "https://portraitpal.ai/wp-content/uploads/2024/10/Linkedin-headshot.jpg"
  },
  {
    name: "Neha Reddy",
    feedback: "The food was delicious, and the ambiance was perfect for a relaxing evening. I truly enjoyed my time here.",
    image: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Vikram Patel",
    feedback:"The breakfast buffet had a wide variety of delicious options. I also appreciated the fast Wi-Fi and well-equipped gym.",
    image:"https://t3.ftcdn.net/jpg/04/60/91/88/360_F_460918802_XVCymFr7MoziFpnInbTDvrlblYhvAOi2.jpg"
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 fadeup py-16 px-4 md:px-10" id="testimonials">
      <Typography
          variant="h3"
          className="text-center"
          sx={{ fontFamily: "Lavishly Yours", color: "red" }}
        >
          What Our Customers Say
        </Typography>
        <Box
        sx={{
          border:1.4,
          width:"100px",
          borderColor:"teal"
          ,margin:"auto"
          ,marginBottom:"20px"
        }}
        />

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className=""
        style={{maxWidth: '1152px',marginInline:"auto"}}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index} style={{padding: "10px"}}>
            <div className="outer">
              <div className="inner">
                <img
                  src={t.image}
                // src='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  alt={t.name}
                  className=""
                />
                <p className=""><RiDoubleQuotesL color='red' style={{alignItems:"top",display:"flex"}}/>{t.feedback}<RiDoubleQuotesR color='red' className='quotes'/></p>
                <h4 className="" style={{fontWeight:"bolder",fontSize:"1.125rem"}}>{t.name}</h4>
                <span className="" style={{color:"#b4bd16"}}>{t.role}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
