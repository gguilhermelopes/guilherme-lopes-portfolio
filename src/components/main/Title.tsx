import MainLinks from "./MainLinks";
import MyName from "./MyName";
import ProfilePhoto from "./ProfilePhoto";

const Title = () => {
  return (
    <section className="my-6 flex gap-8">
      <ProfilePhoto />
      <MyName />
      <MainLinks />
    </section>
  );
};

export default Title;
