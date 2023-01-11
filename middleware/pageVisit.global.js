// Sample of global middleware (suffix .global)
export default defineNuxtRouteMiddleware(() => {
  const pageVisitCount = usePageVisitCount();
  pageVisitCount.value++;
});
