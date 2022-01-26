export interface Props {
  title: string
  color?: string
}

const Button = (props: Props) => {
    return (
      <button>
        <h1 style={{color: props.color ? props.color : 'blue'}}>{props.title}</h1>
      </button>
    )
}
export default Button;