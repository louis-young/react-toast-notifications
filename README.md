⚠️ Please note that this is an old project and does not reflect the quality of my current work.

# React Toast Notifications

A clean, lightweight toast notification library for React.

![# React Toast Notifications](documentation/react-toast-notifications.png)

## Quick Start

1. Wrap your tree in a `ToastNotificationsProvider`.

```tsx
import { ToastNotificationsProvider } from "@louis-young/react-toast-notifications";

// ...

<ToastNotificationsProvider>...<ToastNotificationsProvider>;
```

2. Use the `useToastNotifications` hook.

```tsx
import { useToastNotifications } from "@louis-young/react-toast-notifications";

// ...

const toast = useToastNotificationsContext();
```

3. Create a toast notification.

```tsx
toast.success("Lorem ipsum dolor sit amet");
```

## Documentation

### Components

#### ToastNotificationsProvider

A context provider that provides the toast notifications context to it's descendants.

```tsx
// ...

<ToastNotificationsProvider>...</ToastNotificationsProvider>
```

##### Props

```ts
({
  children,
  options: {
    shouldAutomaticallyDismiss,
    areNotificationsDismissible,
    duration,
  },
}: {
  children: ReactNode;
  options?: {
    shouldAutomaticallyDismiss?: boolean;
    areNotificationsDismissible?: boolean;
    duration?: number;
  };
}) => JSX.Element;
```

- `children`

```ts
ReactNode;
```

The tree you wrap the provider in.

- `options`

```ts
options?: {
    shouldAutomaticallyDismiss?: boolean;
    areNotificationsDismissible?: boolean;
    duration?: number;
};
```

- `shouldAutomaticallyDismiss`

Defaults to `true`.

A boolean to determine whether or not the toast notifications should automatically dismiss.

**NOTE: This can be overridden by specifying this option when creating a toast notification.**

- `areNotificationsDismissible`

Defaults to `false`.

A boolean to determine whether or not the toast notifications should be dismissible.

**NOTE: This can be overridden by specifying this option when creating a toast notification.**

- `duration`

Defaults to `4000`.

The duration the toast notification is visible for in milliseconds.

**NOTE: This can be overridden by specifying this option when creating a toast notification.**

##### Returns

```ts
JSX.Element;
```

The tree you wrap the provider in, wrapped in the toast notifications context provider.

### Hooks

#### useToastNotifications

A hook that exposes functions to create a toast notification of any type.

```tsx
import { useToastNotifications } from "@louis-young/react-toast-notifications";

// ...

const toast = useToastNotifications();

// ...

toast.information("Lorem ipsum dolor sit amet");

// Or with options...

toast.information("Lorem ipsum dolor sit amet", {
  shouldAutomaticallyDismiss: true,
  isDismissible: false,
  duration: 4 * 1000, // Four seconds.
});

// Or...

const { success, information, warning, error } = useToastNotifications();

information("Lorem ipsum dolor sit amet");

// Or with options...

information("Lorem ipsum dolor sit amet", {
  shouldAutomaticallyDismiss: true,
  isDismissible: false,
  duration: 4 * 1000, // Four seconds.
});
```

##### Returns

```ts
{
  success: (
    text: string,
    options?: {
      shouldAutomaticallyDismiss?: boolean;
      isDismissible?: boolean;
      duration?: number;
    }
  ) => { id: string; text: string; type: "success" },
  information: (
    text: string,
    options?: {
      shouldAutomaticallyDismiss?: boolean;
      isDismissible?: boolean;
      duration?: number;
    }) => { id: string; text: string; type: "information" },
  warning: (
    text: string,
    options?: {
      shouldAutomaticallyDismiss?: boolean;
      isDismissible?: boolean;
      duration?: number;
    }) => { id: string; text: string; type: "warning" },
  error: (
    text: string,
    options?: {
      shouldAutomaticallyDismiss?: boolean;
      isDismissible?: boolean;
      duration?: number;
    }) => { id: string; text: string; type: "error" },
}
```

- `success` - A function to create a success toast notification.

```ts
(
  text: string,
  options?: {
    shouldAutomaticallyDismiss?: boolean;
    isDismissible?: boolean;
    duration?: number;
  }
) => {
  id: string;
  text: string;
  type: "success";
};
```

- `information` - A function to create an information toast notification.

```ts
(
  text: string,
  options?: {
    shouldAutomaticallyDismiss?: boolean;
    isDismissible?: boolean;
    duration?: number;
  }
) => {
  id: string;
  text: string;
  type: "information";
};
```

- `warning` - A function to create a warning toast notification.

```ts
(
  text: string,
  options?: {
    shouldAutomaticallyDismiss?: boolean;
    isDismissible?: boolean;
    duration?: number;
  }
) => {
  id: string;
  text: string;
  type: "warning";
};
```

- `error` - A function to create an error toast notification.

```ts
(
  text: string,
  options?: {
    shouldAutomaticallyDismiss?: boolean;
    isDismissible?: boolean;
    duration?: number;
  }
) => {
  id: string;
  text: string;
  type: "error";
};
```

#### useToastNotificationsContext

A hook that exposes functions to create, update and delete toast notifications from the toast notifications context.

```tsx
import { useToastNotificationsContext } from "@louis-young/react-toast-notifications";

// ...

const { createToastNotification, updateToastNotification, deleteToastNotification } = useToastNotificationsContext();

// ...

/**
 * The create and update functions return the whole toast
 * notification so you can easily programmatically
 * update a notification's text or type.
 */

const { id, text, type } = createToastNotification({
  text: "Lorem ipsum dolor sit amet",
  type: "success",
});

/**
 * Update the toast notification's text.
 */

updateToastNotification({ id, { text: "Updated toast notification", type }});

/**
 * The update function also returns the whole toast
 * notification, although it will typically already
 * be in scope from creation.

/**
 * Update the toast notification's type.
 */

updateToastNotification({ id, { text, type: "information" }});

/**
 * Delete the toast notification.
 */

deleteToastNotification({ id });
```

##### Options

N/A

##### Returns

```ts
{
  createToastNotification: (
    toastNotification: { text: string; type: "success" | "information" | "warning" | "error" }
  ) => { id: string; text: string; type: "success" | "information" | "warning" | "error" },
  updateToastNotification: ({
    id,
    updatedToastNotification,
  }: {
    id: string;
    updatedToastNotification: { text: string; type: "success" | "information" | "warning" | "error" };
  }) => { id: string; text: string; type: "success" | "information" | "warning" | "error" },
  deleteToastNotification: ({ id }: { id: string }) => void
}
```

- `createToastNotification` - A function to create a toast notification.

```ts
(toastNotification: {
  text: string;
  type: "success" | "information" | "warning" | "error";
}) => {
  id: string;
  text: string;
  type: "success" | "information" | "warning" | "error";
};
```

- `updateToastNotification` - A function to update a toast notification.

```ts
({id: string, updatedToastNotification: {
  text: string;
  type: "success" | "information" | "warning" | "error";
}}) => {
  id: string;
  text: string;
  type: "success" | "information" | "warning" | "error";
};
```

- `deleteToastNotification` - A function to delete a toast notification.

```ts
({id: string }) => void;
```

