import { TailSpin } from 'react-loader-spinner'

const CenterSpinner = () => {
  return (
    <div className="w-[50px] mx-auto my-32">
        <TailSpin height="50" width="50" color="black" ariaLabel="loading" />
    </div>
  )
}

export default CenterSpinner