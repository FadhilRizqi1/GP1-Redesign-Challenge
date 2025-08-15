import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const dataDepartment = [
  {
    title: "DIPLOMA 3 (D3)",
    programs: [
      "Manajemen Informatika",
      "Komputerisasi Akuntansi",
      "Teknik Komputer",
    ],
  },
  {
    title: "SARJANA 1 (S1)",
    programs: ["Teknik Informatika", "Sistem Informasi", "Sistem Komputer"],
  },
  {
    title: "STRATA 2 (S2)",
    programs: ["Ilmu Komputer"],
  },
];

const researchGroups = [
  {
    title: "COMNETS",
    description: "Communication/Computer Network & Information Security",
    logo: "/public/comnets.png",
  },
  {
    title: "RCRG",
    description: "Robotic and Control Research Laboratory",
    logo: "/public/Robotic.png",
  },
  {
    title: "IPPRRG",
    description: "Image Processing and Pattern Recognition Research Group",
    logo: "/public/IPPR.png",
  },
  {
    title: "AIRLAB",
    description: "Artificial Intelligence Research Laboratory",
    logo: "/public/AIRLAB.jpeg",
  },
  {
    title: "FURO",
    description:
      "Fasilkom Underwater Robotics Research Laboratory",
    logo: "/public/FURO.png",
  },
];

export default function DepartmentAndResearch() {
  return (
    <section className="bg-[#3A3A3A] font-poppins px-6 sm:px-12 lg:px-24 py-10 sm:py-14">
      <div className="max-w-screen-xl mx-auto">
        {/* Judul */}
        <div className="py-2 sm:py-3 px-8 sm:px-12 border-b-4 border-white w-fit mx-auto mb-8">
          <h1 className="text-white text-2xl sm:text-3xl font-semibold text-center">
            DEPARTMENT & RESEARCH GROUP
          </h1>
        </div>

        {/* Konten 2 Kolom */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Department */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-5">
              Department
            </h2>
            <div className="flex flex-col gap-6">
              {dataDepartment.map((dept, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <h3 className="text-lg font-semibold mb-3 text-[#272727] text-center">
                    {dept.title}
                  </h3>
                  <ul className="space-y-2">
                    {dept.programs.map((program, pIndex) => (
                      <li
                        key={pIndex}
                        className="flex items-center gap-3 text-gray-800"
                      >
                        <IoMdCheckmarkCircleOutline className="size-5 text-green-600" />
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Research Group */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-5">
              Research Group
            </h2>
            <div className="flex flex-col gap-5">
              {researchGroups.map((group, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-[#FF9900] text-white rounded-lg p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <img
                    src={group.logo}
                    alt={group.title}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-base font-bold">{group.title}</h3>
                    <p className="text-xs">{group.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
