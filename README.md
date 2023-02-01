########

#### Todo

1. Read DB - not listing anything. ✅
2. Update DB ✅
3. Delete from DB ✅
4. Login with Google ✅

Issue: Being signed out loops the useEffect in AuthContext.js, causing wrong things to render. Basically:
user in UserAuth is causing a re-render of the component using UserAuth, and when that re-renders, it calls UserAuth again, and so on.

Something with dependencies not working correctly in useEffect.

####

########
