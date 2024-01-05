import MainLinks from "./MainLinks";
import MyName from "./MyName";
import ProfilePhoto from "./ProfilePhoto";

const Title = () => {
  return (
    <>
      <section>
        <div className="my-3 sm:my-6 flex gap-3 sm:gap-8">
          <ProfilePhoto />
          <MyName />
          <div className="hidden lg:flex flex-1 self-center items-center justify-center">
            <MainLinks />
          </div>
        </div>
        <div className="flex lg:hidden flex-1 mt-8">
          <MainLinks />
        </div>
      </section>
    </>
  );
};

export default Title;
