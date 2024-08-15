
import Link from 'next/link';
import navigationRoutes from '../data/navigationRoutes';

const Navigation: React.FC = () => {
  // const isUserLoggedIn = false;
  // const [providers, setProviders] = useState<Provider[] | null>(null);

  // useEffect(() => {
  //   const setProviders = async () => {
  //     const response = await getProviders();
  //     setProviders(response);
  //   }
  //   setProviders();
  // }, []);
  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-4">
        {navigationRoutes.map((route, index) => (
          <li key={index}>
            <Link href={route.path} className="text-blue-500 hover:underline">
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        {/* {!isUserLoggedIn ? (
          <div className='flex gap-3'>
            {providers &&
              Object.values(providers).map((provider) => 
                (
                  <button key={provider.name} onClick={() => signIn(provider.id)}>Sign In</button>
                )
              )
            }
          </div>
        ) : (
          <div>
            <button type="button" onClick={() => signOut}>
              Sign Out
            </button>
            <Link href="/profile">
              {/* <Image src="./assets/" alt="Profile" width={35} /> 
            </Link>
          </div>
        )} */}
      </div>
    </nav>
  );
};

export default Navigation;
