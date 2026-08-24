self.addEventListener("push", (event) => {
  const data = event.data ? event.data.json() : {};

  event.waitUntil(
    self.registration.showNotification(
      data.title || "A Última Lâmina",
      {
        body: data.body || "Tem novidade no site!",
        icon: data.icon || "/assets/icon.png",
        badge: data.icon || "/assets/icon.png",
        data: {
          url: data.url || "/"
        }
      }
    )
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
