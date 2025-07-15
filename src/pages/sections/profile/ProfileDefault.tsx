const ProfileDefault = () => (
  <div className="w-full h-full flex flex-col justify-start items-start text-[var(--color-text-main)]">
    {/* Top Box aligned right with circular image and bio */}
    <div className="ml-auto bg-[var(--color-card)] p-4 rounded flex items-start gap-4">
      <img
        src="https://picsum.photos/500"
        alt="Profile"
        className="w-[250px] h-[250px] rounded-full object-cover"
      />
      <div>
        <p className="mb-2 font-semibold">Hi, my name is Joem</p>
        <p className="text-sm text-[var(--color-text-subtle)] text-justify">
          Add random bio here make it very long. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
          Donec ullamcorper nulla non metus auctor fringilla.
        </p>
      </div>
    </div>

    {/* Continuation Box - full width */}
    <div className="w-full bg-[var(--color-card)] p-4 rounded">
      <p className="text-sm text-[var(--color-text-subtle)]">Continuation of bio or other details here.

        add location
        contact
      </p>
    </div>
  </div>
);

export default ProfileDefault;
