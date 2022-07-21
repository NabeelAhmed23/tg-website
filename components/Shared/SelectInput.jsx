export default function SelectInput(props) {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return <select {...props}>{children}</select>;
}
