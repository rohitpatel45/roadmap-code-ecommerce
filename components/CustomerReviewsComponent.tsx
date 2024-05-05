function CustomerReviewsComponent() {
  const reviews = [
    {
      id: 1,
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3618013/settings_images/FfcjlucSr2QAfz0SPtKE_Screenshot_2022-02-16_at_3.45.12_PM.png",
    },
    {
      id: 2,
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3618013/settings_images/FfcjlucSr2QAfz0SPtKE_Screenshot_2022-02-16_at_3.45.12_PM.png",
    },
    {
      id: 3,
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3618013/settings_images/FfcjlucSr2QAfz0SPtKE_Screenshot_2022-02-16_at_3.45.12_PM.png",
    },
    {
      id: 4,
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3618013/settings_images/FfcjlucSr2QAfz0SPtKE_Screenshot_2022-02-16_at_3.45.12_PM.png",
    },
    {
      id: 5,
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3618013/settings_images/FfcjlucSr2QAfz0SPtKE_Screenshot_2022-02-16_at_3.45.12_PM.png",
    },
    {
      id: 6,
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3618013/settings_images/cqZntYeyRlq1wot1bbSS_Screenshot_2022-03-30_at_4.53.30_PM.png",
    },
  ];

  return (
    <>
      <h3 className="text-center font-medium text-gray-700 py-1">
        Customer Reviews make us happy
      </h3>

      <div className="p-1 gap-2 bg-red-400/50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div className="gap-10">
            <img src={review.img} alt="" className="w-full rounded-md" />
          </div>
        ))}
      </div>
    </>
  );
}

export default CustomerReviewsComponent;
