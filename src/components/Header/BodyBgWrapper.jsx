import React from 'react'

export const BodyBgWrapper = () => {
    return (
        <div className="absolute inset-0 w-full h-full">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/1d8a9cc6-dbed-4bcc-9e40-d71d8cc8340b/web/IN-en-20251006-TRIFECTA-perspective_a6194aef-34d2-4b3a-b93f-d9cb871bdcd0_large.jpg')",
                    zIndex: -1
                }}
            />
            <div className="absolute inset-0 w-full h-full bg-black/60" style={{ zIndex: -1 }} />
        </div>
    )
}
