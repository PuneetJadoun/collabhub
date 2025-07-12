import { useState } from 'react';

const faqs = [
  { q: 'Who can join?', a: 'Any student or learner looking to collaborate on projects can join CollabHub.' },
  { q: 'Is it free?', a: 'Yes, CollabHub is completely free to use for all students.' },
  { q: 'How does collaboration work?', a: 'You can post or join projects, chat, share resources, and work together in teams.' },
  { q: 'Is my data safe?', a: 'We take privacy seriously and use best practices to keep your data secure.' },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-24 px-4 bg-gray-950 flex flex-col items-center justify-center" id="faq">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-['Poppins'] z-10 drop-shadow-lg">FAQ</h2>
      <div className="max-w-2xl mx-auto space-y-6 w-full">
        {faqs.map((f, i) => (
          <div key={i} className="border border-blue-400/10 rounded-2xl bg-gray-900/80 backdrop-blur-lg shadow-xl font-['Poppins']">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center px-8 py-6 text-lg font-semibold focus:outline-none text-white">
              <span>{f.q}</span>
              <span className="text-blue-400 text-2xl">{open === i ? '-' : '+'}</span>
            </button>
            {open === i && <div className="px-8 pb-6 text-blue-100 text-base transition-all duration-300">{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ; 