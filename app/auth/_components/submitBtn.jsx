

export function SubmitBtn({text}) {

    const className = {
        submitbtn: 'w-full text-center p-2 capitalize mb-4 rounded-md border border-green-50 shadow-md bg-slate-800 text-green-50 hover:bg-slate-700'
    }

  return (
    <button className={className.submitbtn}>
        {text}
    </button>
    )
}
