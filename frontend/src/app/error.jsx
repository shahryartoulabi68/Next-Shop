"use client"

function Error({ error }) {
    return ( <div>
            <div className="w-full text-center text-secondary-700">{error.message}😒 </div>
        </div>
    )
}

export default Error
