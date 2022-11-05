export const ButtonShared = ({
  color,
  width,
  background,
  text = "Click Me",
  fontWeight,
  onClick,
  fontSize,
  borderRadius = "30px",
  height = "56px",
}) => {
  return (
    <button
      className="btn-btn"
      onClick={onClick}
      style={{
        width: width,
        color: color,
        background: background,
        borderRadius: borderRadius,
        cursor: "pointer",
        outline: "none",
        border: "none",
        height: height,
        fontWeight: fontWeight,
        fontSize: fontSize,
        lineHeight: "22px",
      }}
    >
      {text}
    </button>
  );
};
