/** props children
 * properti yang dipakai untuk ngirim komponen anak(children) ke dalam komponen index(parent)
 * contohinicardadalah komponen parent sebagaiwrapper
 * child adalah komponen yang adadidalamkomponenparent <card>{komponen children}</card>
 */
const Card = ({ children, cardClassname }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg w-[300px] ${cardClassname}`}>
      {children}
    </div>
  );
};
export default Card;
