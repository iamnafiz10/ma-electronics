import React from 'react';

const popularTags = [
    'New Arrival',
    'Best Seller',
    'Trending',
    'Top Rated',
    'Hot Deal',
    'Limited Stock',
    'On Sale',
    'Exclusive',
    'Featured',
    'Recommended',
    'Flash Sale',
    'Popular Choice',
    'Editor’s Pick',
    'Premium',
    'Value Deal',
];

function PopularTag() {
    return (
        <section
            id="popular-tag-section"
            className="py-8 bg-gray-50 mt-6"
        >
            <div className="container mx-auto">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h2 className="text-[30px] font-bold text-gray-800">
                        Popular Tags
                    </h2>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                    {popularTags.map((tag, index) => (
                        <button
                            key={index}
                            type="button"
                            className="
                            px-5 py-2 text-sm font-medium rounded-full
                            border border-primary text-primary bg-white
                            transition-all duration-300 cursor-pointer
                            hover:bg-primary hover:text-white
                            hover:shadow-md
                            active:scale-95
                            "
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PopularTag;