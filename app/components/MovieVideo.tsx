import prisma from '../utils/prisma';
import MovieButtons from './MovieButtons';

async function getData() {
  const data = await prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      duration: true,
      id: true,
      age: true,
      release: true,
      youtubeString: true,
    },
  });

  return data;
}

const MovieVideoPage = async () => {
  const data = await getData();

  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
      <video
        src={data?.videoSource}
        poster={data?.imageString}
        autoPlay
        muted
        loop
        className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]"
      ></video>

      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          {data?.title}
        </h1>
        <p className="text-white text-lg mt-5 line-clamp-3">{data?.overview}</p>
        <div className="flex gap-x-3 mt-4">
          <MovieButtons
            age={data?.age as number}
            duration={data?.duration as number}
            overview={data?.overview as string}
            id={data?.id as number}
            releaseDate={data?.release as number}
            title={data?.title as string}
            youtubeUrl={data?.youtubeString as string}
            key={data?.id}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieVideoPage;

// 'poster' attribute is like a thumbnail that displays a poster assigned to it before the video in the <video> tag loads
