<template>
  <section class="Section py-5 mx-auto w-full px-5 sm:px-10 lg:w-2/3 2xl:w-1/2" id="bookInfo">
    <!-- start book details -->
    <div class="">
      <div class="mb-6 ">
        <h3 class="text-2xl italic text-gray-200 bg-gray-800 w-auto inline-block px-2">Book</h3>
      </div>
      <!-- <hr class="mb-3"/> -->
      <div class="sm:flex">
        <div class="sm:w-auto grid mr-8 mb-auto">
          <div class="justify-self-center mb-3">
            <a
              class="book-link"
              href="https://www.amazon.com/Leaving-Life-Simple-Planning-Estate/dp/1483594513?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=storypodca-20&linkId=2P4S6EY6B462X4AR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class=""
                style="width:160px;"
                src="@/static/images/leaving-life.jpg"
                alt="Leaving life"
              />
            </a>
          </div>
          <div class="justify-self-center mb-3">
            <a
              class=""
              href="https://www.amazon.com/Leaving-Life-Simple-Planning-Estate/dp/1483594513?_encoding=UTF8&amp;camp=1789&amp;creative=9325&amp;linkCode=ur2&amp;tag=storypodca-20&amp;linkId=2P4S6EY6B462X4AR"
              target="_blank"
              rel="noopener noreferrer"
              style="border:none;text-decoration:none;"
            >
              <img
                src="https://www.niftybuttons.com/amazon/amazon-button9.png"
                style="height: 50px;"
              />
            </a>
          </div>
        </div>
        <div class="sm:flex-1 ">
          <div class="mb-2 pb-2 border-b text-blue-600" style="">
            <a
              href="https://www.amazon.com/Leaving-Life-Simple-Planning-Estate/dp/1483594513?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=storypodca-20&linkId=2P4S6EY6B462X4AR"
              target="_blank"
              rel="noopener noreferrer"
              style="text-decoration: none;"
            >
              <div class="font-semibold text-xl">
                Leaving Life
              </div>
              <div class="">
                A Simple Guide to Planning Your Estate and Not Leaving a Mess
              </div>
            </a>
          </div>

          <p class="text-justify text-gray-800">
            Leaving Life is an easy to read discussion of the need to plan one’s
            estate in order to avoid chaos, confusion and competition in the
            lives of those you leave behind. Other interesting topics include,
            financial planning, documenting a legacy, cataloging valuables and
            some philosophic contemplations on the nature of our mortality. The
            book concepts have already helped many people begin to prepare their
            estates and think about the responsibility of taking action creating
            wills, living trusts, final arrangements and dealing with
            possessions.
          </p>
        </div>
      </div>
    </div>
    <!-- end -->
  </section>
</template>

<script>
export default {
  name: 'BookInfo'
}
</script>
<style></style>
