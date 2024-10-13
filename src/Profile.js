import { getImageUrl } from "./utils";

export default function Profile({
  imgId,
  name,
  imgWidth,
  imgHeight,
  profession,
  numberOfAwards,
  awardsName,
  discoveries,
}) {
  return (
    <>
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imgId)}
        alt={name}
        width={imgWidth}
        height={imgHeight}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {numberOfAwards} </b>
          {awardsName}
        </li>
        <li>
          <b>Discovered: </b>
          {discoveries}
        </li>
      </ul>
    </>
  );
}
