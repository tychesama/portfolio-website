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
  <div className="w-full h-[250px] flex flex-col justify-between items-center text-[var(--color-text-main)]">
    <div className="bg-[var(--color-card)] px-8 pt-6 rounded-lg flex items-start w-full ml-8 ">
      <div className="min-w-[275px] h-[300px] overflow-hidden">
        <img
          src="/assets/titlegif.gif"
          alt="Profile"
          className="w-[300px] h-[600px] object-cover object-top transform scale-x-[-1]"
        />
      </div>
      <div>
        <p className="mb-2 text-sm font-semibold">
          Hi, my name is {profile.nickname}
        </p>
        <p className="text-sm text-[var(--color-text-subtle)] text-justify">
          {profile.about}
        </p>
      </div>
    </div>

    <div className="w-[95%] min-h-[175px] bg-gradient-to-b from-[var(--color-mini-card)] to-[color-mix(in_srgb,var(--color-mini-card)_65%,black)] p-6 rounded-md flex items-start gap-4 shadow-md">
      <img
        src="https://media1.tenor.com/m/5qbofo9sJsgAAAAd/my-mom-is-kinda-homeless-ishowspeed.gif"
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
