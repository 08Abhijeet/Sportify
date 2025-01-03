import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"}></Title>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-white">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            dignissimos dolor iste repellendus amet eligendi, cupiditate
            suscipit quis sed nam, non laudantium debitis commodi illo
            doloribus, tempora nisi voluptate ipsam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
            sequi dolorem similique saepe eius nemo ipsum autem suscipit! Alias
            voluptatem aliquam expedita sit necessitatibus omnis obcaecati
            dolore, debitis deleniti labore.
          </p>
          <b className="">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipis laudantium error,
            necessitatibus maxime quisquam.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"}></Title>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 text-white">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur ail eligendi. Voluptates
            facere rerum omnis in fugiat veritatis. Similique, deserunt quis!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur ail eligendi. Voluptates
            facere rerum omnis in fugiat veritatis. Similique, deserunt quis!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur ail eligendi. Voluptates
            facere rerum omnis in fugiat veritatis. Similique, deserunt quis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
