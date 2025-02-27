export default function About() {
  return (
    <section className="mx-auto flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-xl lg:flex-row">
   
      <div className="">
        
        <h2 className="mb-10 max-w-lg text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">
          About Us
        </h2>
        <div className="grid gap-y-12 gap-x-8 lg:grid-cols-2">
          <div>
            <p className="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">
              Launch Websites in minutes
            </p>
            <p className="text-lg text-gray-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              nihil reprehenderit laboriosam, exercitationem consectetur
              deserunt aliquam ab maiores!
            </p>
          </div>
          <div>
            <p className="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">
              Never miss deadlines
            </p>
            <p className="text-lg text-gray-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              nihil reprehenderit laboriosam, exercitationem consectetur
              deserunt aliquam ab maiores!
            </p>
          </div>
          <div>
            <p className="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">
              Super Intuitive
            </p>
            <p className="text-lg text-gray-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              nihil reprehenderit laboriosam, exercitationem consectetur
              deserunt aliquam ab maiores!
            </p>
          </div>
          <div>
            <p className="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">
              Speedy Websites
            </p>
            <p className="text-lg text-gray-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              nihil reprehenderit laboriosam, exercitationem consectetur
              deserunt aliquam ab maiores!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}