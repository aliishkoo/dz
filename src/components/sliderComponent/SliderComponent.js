import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSliderData } from "./store";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SliderComponent = ({ title }) => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.slider);

    useEffect(() => {
        dispatch(fetchSliderData());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>{title}</h2>
            <Swiper spaceBetween={20} slidesPerView={3}>
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="card">
                            <img src={item.thumbnailUrl} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SliderComponent;