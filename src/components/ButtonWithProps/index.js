/**props (singkatan dari properties)
 * data untuk ngirim data/statedari komponen satu ke komponen lain
 * props bisa dipake buat kustomasi gaya, ngirim atau nerima data dari API dan sebagainya
 */
const ButtonWithProps = ({
  text,
  className = "bg-blue-600 hover:bg-blue-800",
}) => {
  return (
    <button className={`h-14 px-6 font-semibold ${className} text-white`}>
      {text}
    </button>
  );
};

export default ButtonWithProps;
