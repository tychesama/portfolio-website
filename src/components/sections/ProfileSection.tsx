import Image from 'next/image';
import pfp from "../../photos/pfp.gif";

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
    <div className="bg-[var(--color-card)] px-8 py-6 rounded-lg flex items-start gap-6 w-full">
      <Image
        src={pfp}
        alt="Profile"
        className="w-[250px] h-[250px] rounded-full object-cover" priority
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
