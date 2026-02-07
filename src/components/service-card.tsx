import type { Service } from "@/types";

const ServiceCard = ({
  service,
  isActive = false,
}: {
  service: Service;
  isActive?: boolean;
}) => {
  return (
    <div
      className={`group flex flex-col gap-4 border rounded-xl p-6 transition-all duration-300 ease-in-out bg-white ${
        isActive
          ? "border-(--primary) shadow-xl"
          : "border-gray-200 hover:border-(--primary) hover:shadow-xl"
      }`}
    >
      <div
        className={`rounded-full p-2 w-fit ${
          isActive
            ? "border border-(--primary)"
            : "group-hover:border group-hover:border-(--primary)"
        }`}
      >
        <img src={service.image} className="h-12 w-12" alt={service.title} />
      </div>
      <h1
        className={`text-xl text-left font-bold transition-colors duration-300 ${
          isActive
            ? "text-(--primary)"
            : "text-gray-900 group-hover:text-(--primary)"
        }`}
      >
        {service.title}
      </h1>
      <p className="text-gray-600 text-left leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;
