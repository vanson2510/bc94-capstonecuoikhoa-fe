import { fetchListNameJob } from "@/app/services/job";
import Image from "next/image";

type TProps = {
  params: {
    name: string;
  };
};

export default async function Detail(props: TProps) {
  const { name } = await props.params;

  const result = await fetchListNameJob(name);

  console.log("Content:", result);

  if (!result || result.length === 0) {
    return (
      <div className="p-10">Không tìm thấy công việc với từ khóa: {name}</div>
    );
  }

  return (
    <div className="mx-auto my-10">
      <a
        href="#"
        className="flex flex-col items-center bg-gray-100 p-6 border border-default rounded-base shadow-xs md:flex-row md:max-w-xl md:flex-row md:max-w-xl"
      >
        {result?.[0] && (
          <Image
            className="object-cover w-full rounded-base h-64 md:h-auto md:w-48 mb-4 md:mb-0"
            src={result[0].congViec.hinhAnh}
            alt={result[0].congViec.moTa}
            width={300}
            height={300}
          />
        )}
        <div className="flex flex-col justify-between md:p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading">
            {name}
          </h5>
          <h6 className="font-bold text-xl pb-3">
            {result?.[0].congViec.tenCongViec}
          </h6>
          <p className="mb-6 text-body">{result?.[0].congViec.moTaNgan}</p>
          <div>
            <button
              type="button"
              className="inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              Read more
              <svg
                className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}
