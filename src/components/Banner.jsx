const Banner = () => {
  return (
    <div
      className="container "
      style={{
        width: "100%", // Kapsayıcının genişliği %100
        height: "auto", // Yükseklik, genişlik ile orantılı şekilde ayarlanacak
        aspectRatio: "4/1", // 4:1 oranı ile yükseklik ayarlanacak
        overflow: "hidden",
      }}
    >
      <img
        style={{
          width: "100%", // Genişlik %100 olacak
          height: "100%", // Yükseklik de orantılı olacak
          objectFit: "cover",
        }}
        src="/images/banner.jpg"
        alt=""
      />
    </div>
  );
};

export default Banner;
