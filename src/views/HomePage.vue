<template>
  <div>
    <Header />
    <Banner />
    <AdvantagesBlock />
    <Slider />
    <AboutSection />
    <Advantages />
    <FreeTestSamples />
    <PopularCategories />
    <ProductSlider />
    <SpecialOffers />
    <RecommendedProducts />
    <AboutCompany />
    <NewsSection />
    <OurGoal />
    <Partners />
    <Footer />
  </div>
</template>

<script>
import components from '../components'

export default {
  name: 'HomePage',
  components: {
    ...components,
  }
}</script>