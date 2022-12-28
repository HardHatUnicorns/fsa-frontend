type CinemaCardProps = {
  name: string;
  url: string;
};

export const CinemaCard = ({ name, url }: CinemaCardProps) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div>
        <p>{name}</p>
      </div>
    </a>
  );
};
