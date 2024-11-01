import React from 'react';

type Testimonial = {
  name: string;
  role: string;
  image: string;
  title: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Bonnie Green",
    role: "Developer at Open AI",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
    title: "Very easy this was to integrate",
    message: "If you care for your time, I hands down would go with this."
  },
  {
    name: "Roberta Casas",
    role: "Lead designer at Dropbox",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    title: "Solid foundation for any project",
    message: "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"
  },
  {
    name: "Jese Leos",
    role: "Software Engineer at Facebook",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    title: "Mindblowing workflow",
    message: "Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."
  },
  {
    name: "Joseph McFall",
    role: "CTO at Google",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
    title: "Efficient Collaborating",
    message: "You have many examples that can be used to create a fast prototype for your team."
  }
];

const Testimonials: React.FC = () => {
  return (
    <div id='testimonials' className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
      {testimonials.map((testimonial, index) => (
        <figure
          key={index}
          className={`flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${
            index === 0 ? 'md:rounded-ss-lg' : ''
          } ${index === 1 ? 'md:rounded-se-lg' : ''} ${
            index === 2 ? 'md:rounded-es-lg md:border-b-0 md:border-e' : ''
          } ${index === 3 ? 'rounded-b-lg md:rounded-se-lg' : ''}`}
        >
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {testimonial.title}
            </h3>
            <p className="my-4">{testimonial.message}</p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <img
              className="rounded-full w-9 h-9"
              src={testimonial.image}
              alt={`${testimonial.name} profile picture`}
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>{testimonial.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {testimonial.role}
              </div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Testimonials;
