import { firebaseStorageConfig } from "./firebase/firebase";

export default ({ env }) => {
  return {
    upload: {
      config: {
        provider: "strapi-provider-firebase-storage",
        providerOptions: {
          serviceAccount: JSON.parse(JSON.stringify(firebaseStorageConfig)),
          bucket: env("STORAGE_BUCKET_URL", "my-bucket-name.appspot.com"),
          sortInStorage: true,
          debug: false,
        },
      },
    },
  };
};
