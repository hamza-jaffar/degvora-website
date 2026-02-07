import { wayOfBuildingSoftware } from "@/constant/way-of-building-software";

const WayOfBuildingSoftware = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 mt-16">
      {/* Heading */}
      <div className="text-center flex flex-col items-center gap-5">
        <span className="w-24 h-2 rounded-full bg-linear-to-r from-(--secondary-light) to-(--primary-light)" />

        <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
          Way of Building <br />
          <span className="font-bold text-(--primary)">Great Software</span>
        </h1>
      </div>

      {/* Content */}
      <div className="mt-16 space-y-24">
        {wayOfBuildingSoftware.map((data, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={data.id}
              className={`flex flex-col-reverse ${
                isReverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-14`}
            >
              {/* Text Card */}
              <div className="w-full md:w-1/2 bg-white rounded-2xl p-8 flex flex-col gap-6 text-left shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {data.title}
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  {data.long_description}
                </p>

                <p className="text-gray-600 leading-relaxed">
                  {data.short_description}
                </p>

                {/* Quote */}
                <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-[var(--secondary)]">
                  <p className="text-[var(--secondary)] italic">
                    “{data.comment}”
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 mt-2">
                  <img
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-[var(--secondary-light)]"
                    src="/assets/ceo-image.png"
                    alt="CEO"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Hamza Jaffar
                    </h3>
                    <p className="text-sm text-gray-500">CEO</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={data.image}
                  alt={data.title}
                  className="rounded-2xl border border-gray-100 shadow-xl max-h-[420px] object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WayOfBuildingSoftware;
