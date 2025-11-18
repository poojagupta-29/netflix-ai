import React from 'react'

const ShimmerMovieCard = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 py-10">
            {Array.from({ length: 8 }).map((_, i) =>
                <div key={i} className="relative rounded-sm overflow-hidden cursor-pointer bg-black shadow-lg transition-transform bg-gradient-to-r from-[#363636] via-[#4e4e4e] to-[#363636] animate-shimmer"
                    style={{ aspectRatio: "1 / 1" }}>
                </div>
            )}
        </div>

    )
}

export default ShimmerMovieCard