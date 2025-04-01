import { ThreeDots } from 'react-loader-spinner'

function Loading({ width = "75", height = "75" , color="rgb(var( --color-primary-900))"}) {
    return (<ThreeDots
            visible={true}
            height={height}
            width={width}
            color={color}
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
                display: "inlin-block",
                justifyContent: "center"
            }}
        />)
    
}

export default Loading
