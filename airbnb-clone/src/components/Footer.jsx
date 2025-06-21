
function Footer() {

    return(
        <footer className="mt-16 border-t py-6 text-center text-sm text-gray-500">
            <p>
                &copy; {new Date().getFullYear()} WanderIn
            </p>
        </footer>
    );
}

export default Footer