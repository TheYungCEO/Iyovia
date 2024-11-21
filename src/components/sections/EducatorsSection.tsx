import EducatorCard from '../EducatorCard';

const educators = [
  {
    name: "MR BANKZ",
    specialty: "SOCIAL MEDIA & AI",
    instagram: "MRBANKZ",
    instagramUrl: "https://instagram.com/mrbankz",
    image: "https://i.ibb.co/wW8T0mJ/bankz.jpg"
  },
  {
    name: "LONDO FIRST",
    specialty: "SOCIAL MEDIA",
    instagram: "WISDOM.6LAST",
    instagramUrl: "https://instagram.com/wisdom.6last",
    image: "https://i.ibb.co/WVMTGtt/londo.jpg"
  },
  {
    name: "DEVIN FORD",
    specialty: "SOCIAL MEDIA",
    instagram: "WOKEDEV444",
    instagramUrl: "https://instagram.com/wokedev444",
    image: "https://i.ibb.co/FhHwzmN/devin.jpg"
  },
  {
    name: "FACELESS FINANCE",
    specialty: "SOCIAL MEDIA",
    instagram: "FACELESSFINANCEFACTS",
    instagramUrl: "https://instagram.com/facelessfinancefacts",
    image: "https://i.ibb.co/RSbJ5mF/faceless.jpg"
  },
  {
    name: "GAIGE EFIRD",
    specialty: "OPTIONS + FUTURES",
    instagram: "GAIGE.EFIRD",
    instagramUrl: "https://instagram.com/gaige.efird",
    image: "https://i.ibb.co/g9GvdHG/gaige.jpg"
  },
  {
    name: "KI JOHNSON",
    specialty: "SOCIAL MEDIA & AI",
    instagram: "IAM.YUNGCEO",
    instagramUrl: "https://instagram.com/iam.yungceo",
    image: "https://i.ibb.co/xz187C4/ki.jpg"
  },
  {
    name: "GUWOP WEALTHY",
    specialty: "CREDIT",
    instagram: "GUWOPWEALTHY",
    instagramUrl: "https://instagram.com/guwopwealthy",
    image: "https://i.ibb.co/n7X8Cjr/guwop.jpg"
  }
];

export default function EducatorsSection() {
  return (
    <section id="educators" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <h2 className="section-heading text-center mb-16">MEET OUR EDUCATORS</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {educators.map((educator, index) => (
          <EducatorCard key={index} {...educator} />
        ))}
      </div>
    </section>
  );
}