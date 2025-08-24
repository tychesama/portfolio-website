interface ProfileProps {
  profile: {
    name: string;
    title: string;
    nickname: string;
    image: string;
    about: string;
  };
}

const ProfileDefault: React.FC<ProfileProps> = ({ profile }) => (
  <div className="w-full h-full flex flex-col justify-between items-center text-[var(--color-text-main)]">
    <div className="bg-[var(--color-card)] px-8 py-6 rounded-lg flex items-start gap-6 w-full">
      <img
        src={profile.image}
        alt="Profile"
        className="w-[250px] h-[250px] rounded-full object-cover"
      />
      <div>
        <p className="mb-2 font-semibold">
          Hi, my name is {profile.nickname}
        </p>
        <p className="text-sm text-[var(--color-text-subtle)] text-justify">
          {profile.about}
        </p>
      </div>
    </div>

    <div className="w-[90%] bg-[var(--color-mini-card)] p-6 rounded-lg mt-12 flex items-start gap-4 min-h-[125px] shadow-md">
      <img
        src="https://picsum.photos/500?random=2"
        alt="thumb"
        className="w-[75px] h-[75px] rounded-md object-cover"
      />
      <div className="flex flex-col justify-center ">
        <p className="text-sm text-[var(--color-text-subtle)]">Title Highlight</p>
        <p className="text-sm text-[var(--color-text-subtle)]">Description</p>
      </div>
    </div>
  </div>
);

export default ProfileDefault;
