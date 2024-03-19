<template>
  <div class="hidden min-w-16 xs:block xs:col-span-1 xl:col-span-2">
    <div class="sticky top-0">
      <div class="h-screen flex flex-col">
        <div :class="defaultTransition" class="p-2 ms-3 max-w-min my-2 rounded-full hover:bg-blue-50 dark:hover:bg-slate-50/20">
          <RouterLink class="h-8 w-8" to="/">
            <IconLogo class="h-8 w-8" />
          </RouterLink>
        </div>
        <div class="flex flex-col gap-2">
          <SidebarTab active>
            <template #icon>
              <HomeIcon class="h-8 w-8" />
            </template>
            <template #nama> Home </template>
          </SidebarTab>
          <SidebarTab>
            <template #icon>
              <HashtagIcon class="h-8 w-8" />
            </template>
            <template #nama> Explore </template>
          </SidebarTab>
          <SidebarTab>
            <template #icon>
              <InboxIcon class="h-8 w-8" />
            </template>
            <template #nama> Messages </template>
          </SidebarTab>
          <SidebarTab>
            <template #icon>
              <BellIcon class="h-8 w-8" />
            </template>
            <template #nama> Notification </template>
          </SidebarTab>
          <SidebarTab>
            <template #icon>
              <BookmarkIcon class="h-8 w-8" />
            </template>
            <template #nama> Bookmarks </template>
          </SidebarTab>
          <SidebarTab>
            <template #icon>
              <DocumentTextIcon class="h-8 w-8" />
            </template>
            <template #nama> List </template>
          </SidebarTab>
          <SidebarTab>
            <template #icon>
              <UserIcon class="h-8 w-8" />
            </template>
            <template #nama> Profile </template>
          </SidebarTab>
          <SidebarTab>
            <template #icon>
              <EllipsisHorizontalCircleIcon class="h-8 w-8" />
            </template>
            <template #nama> More </template>
          </SidebarTab>
          <div class="xl:hidden px-3">
            <UIButton>
              <div class="w-6 h-6 font-bold"><PencilIcon /></div
            ></UIButton>
          </div>
          <div class="max-xl:hidden">
            <UIButton size="lg" liquid>
              <span class="font-bold">Tweet</span>
            </UIButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserIcon, EllipsisHorizontalCircleIcon, PencilIcon } from "@heroicons/vue/24/outline";
import { HomeIcon } from "@heroicons/vue/24/solid";

const { defaultTransition } = useTailwindConfig();
</script>
